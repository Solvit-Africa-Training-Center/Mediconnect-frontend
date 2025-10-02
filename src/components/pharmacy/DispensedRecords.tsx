import React from 'react';
import { Download } from 'lucide-react';
import SearchFilter from './SearchFilter';
import DispensedTable from './DispensedTable';
import type { DispensedRecord } from '../../Types/pharmacist/pharmacyTypes';


const DispensedRecords: React.FC = () => {
  // Static example data
  const records: DispensedRecord[] = [
    { id: '1', patientName: 'John Doe', prescription: 'Amoxicillin 500mg', dispensedBy: 'Dr. Smith', date: '2025-09-29' },
    { id: '2', patientName: 'Jane Smith', prescription: 'Ibuprofen 200mg', dispensedBy: 'Dr. Adams', date: '2025-09-28' },
  ];

  const handleExportRecords = () => {
    alert('Exporting records...');
  };

  return (
    <div className="space-y-6">
      {/* Header with Export Button */}
      <div className="flex items-center justify-between">
        <div className="card p-4 flex-1 mr-4">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-blue-50 rounded">
              <div className="w-4 h-4 bg-blue-600 rounded"></div>
            </div>
            <h2 className="text-lg font-semibold text-gray-900">
              Dispensed Prescription Records
            </h2>
          </div>
        </div>
        <button
          onClick={handleExportRecords}
          className="btn-primary flex items-center gap-2"
        >
          <Download size={16} />
          Export Records
        </button>
      </div>

      {/* Search and Filter */}
      <SearchFilter />

      {/* Records Count */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">
          Dispensed Records ({records.length})
        </h3>
      </div>

      {/* Records Table */}
      <DispensedTable records={records} />
    </div>
  );
};

export default DispensedRecords;
